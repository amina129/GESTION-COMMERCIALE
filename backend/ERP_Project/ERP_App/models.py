from django.db import models
from django.core.exceptions import ValidationError


#SALES MANAGEMENT
class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    channel = models.CharField(max_length=100, default='in-store')  # optional

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    def save(self, *args, **kwargs):
        if self.product.stock < self.quantity:
            raise ValidationError(f"Stock insuffisant pour le produit: {self.product.name}")
        self.product.stock -= self.quantity
        self.product.save()
        super().save(*args, **kwargs)
        
#This ensures a user can't order more than what's in stock, and stock decreases after order.




#INVENTORY CONTROL
class Supplier(models.Model):
    name = models.CharField(max_length=255)
    contact_email = models.EmailField()
    phone = models.CharField(max_length=20)

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=0)
    supplier = models.ForeignKey(Supplier, null=True, on_delete=models.SET_NULL)
    #POINT OF SALE (POS)
    barcode = models.CharField(max_length=50, unique=True, null=True, blank=True)


#BILLING & INVOICING
class Invoice(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    issued_at = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    tax = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    pdf_file = models.FileField(upload_to='invoices/', null=True, blank=True)
    #When an Invoice is created, automatically calculate the total from OrderItems.
    def save(self, *args, **kwargs):
        items = self.order.orderitem_set.all()
        self.total_amount = sum(item.product.price * item.quantity for item in items)
        super().save(*args, **kwargs)


class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid_at = models.DateTimeField(auto_now_add=True)
    method = models.CharField(max_length=50, choices=[('cash', 'Cash'), ('card', 'Card')])
    def clean(self):
        if self.amount > self.order.total:
            raise ValidationError("Le montant du paiement dépasse le total de la commande.")
        #When a Payment is created, it should not exceed the total amount of the related order.
    def save(self, *args, **kwargs):
        self.full_clean()  # this will trigger clean()
        super().save(*args, **kwargs)
    


