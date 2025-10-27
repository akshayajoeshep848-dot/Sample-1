
'''num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
op = input("Enter operator (+, -, *, /, %): ")

if op == "+":
    result = num1 + num2
elif op == "-":
    result = num1 - num2
elif op == "*":
    result = num1 * num2
elif op == "/":
    result = num1 / num2
elif op == "%":
    result = num1 % num2
else:
    result = "Invalid operator"

print("Result:", result)'''



'''year = int(input("Enter a year: "))

is_leap = (year % 4 == 0) and ((year % 100 != 0) or (year % 400 == 0))

print("Leap year?" , is_leap)'''


num = int(input("Enter a 3-digit number: "))

digit1 = num // 100
digit2 = (num // 10) % 10
digit3 = num % 10

sum_digits = digit1 + digit2 + digit3
print("Sum of digits:", sum_digits)





price = float(input("Enter price: "))
discount_rate = float(input("Enter discount rate (%): "))

price_after_discount = price - (price * discount_rate / 100)


if price_after_discount > 5000:
    price_after_discount *= 0.95   
elif 2000 <= price_after_discount <= 5000:
    price_after_discount *= 0.98   

print("Final price: ₹{:.2f}".format(price_after_discount))