from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

@api_view(['POST'])
def signup(request):
    email = request.data.get('email')
    password = request.data.get('password')
    username = email

    print(f"Signup attempt with email={email}, password={password}")

    if User.objects.filter(username=username).exists():
        print("Signup failed: user exists")
        return Response({'error': 'User already exists'}, status=400)

    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()

    print(f"User created: {user.username}")

    token = Token.objects.create(user=user)
    return Response({'token': token.key, 'user': user.username})



@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(f"Login attempt with email={email}, password={password}")

    user = authenticate(username=email, password=password)
    if not user:
        try:
            user_obj = User.objects.get(email=email)
            user = authenticate(username=user_obj.username, password=password)
        except User.DoesNotExist:
            user = None

    if user:
        print(f"Login success for user: {user.username}")
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': user.username})
    else:
        print("Login failed: invalid credentials")
        return Response({'error': 'Invalid credentials'}, status=400)

