#Serializers turn your model data into JSON and validate inputs.

from rest_framework import serializers
from .models import Product, Customer, Supplier, Order, OrderItem, Invoice, Payment

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'created_at', 'channel', 'items']
    def validate(self, data):
        product = data['product']
        quantity = data['quantity']
        if product.stock < quantity:
            raise serializers.ValidationError({
                'quantity': f"Stock insuffisant pour le produit '{product.name}'. Stock disponible: {product.stock}."
            })
        return data
    # Validate order quantity vs stock in

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = '__all__'
    def create(self, validated_data):
        order = validated_data['order']
        total = sum(item.product.price * item.quantity for item in order.orderitem_set.all())
        validated_data['total_amount'] = total
        return super().create(validated_data)
    # Bonus: Automatically compute total invoice amount

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
    #Validate payment amount in PaymentSerializer
    def validate(self, data):
        order = data['order']
        amount = data['amount']
        if amount > order.total:
            raise serializers.ValidationError({
                'amount': f"Le montant du paiement ({amount}) dépasse le total de la commande ({order.total})."
            })
        return data
