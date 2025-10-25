# simple calculator
# nmbr=float(input("Enter a number"))
# nmbr1=float(input("Enter a another number"))
# operator=input("Enter an operator")
# if operator=="+":
#     print(nmbr+nmbr1)
# elif operator=="-":
#     print(nmbr-nmbr1)
# elif operator=="*":
#     print(nmbr*nmbr1)
# elif operator=="/":
#     print(nmbr/nmbr1)
# elif operator=="%":
#     print(nmbr%nmbr1)  
# else:
#     print("operator not found")          

# Leap year check
# year=int(input("Enter a year"))
# if year%400==0:
#     print("It is a centuary leap year")
# elif year%4==0 and year%100!=0:
#     print("It is a leap year")   
# else:
#     print("It is not leap year")    

# sum of three digit numbers
# number1=int(input("Enter a number"))
# num=number1%10
# num1=(number1//10)
# num2=num1//10
# num3=num1%10
# print(num+num2+num3) 


# price=int(input("Enter your price"))
# if price>5000:
#     discount=(5/100)*price
#     print("you get  discount so you paid",price-discount )
# elif price>2000 and price<=5000:
#     discount=(2/100)*price
#     print("you get discount so you paid",price-discount)    
# else:
#     print("No discount")


# num=int(input("enter a number"))
# if(num<=21):
#  diff=21-num
#  print(diff)
# elif(num>21):
#     diff=num-21
#     difference=diff*2
#     print(difference)

number=int(input("Enter three digit num"))
nmbr=number%10
nmbr1=number//10
nmbr2=nmbr1//10
nmbr3=nmbr1%10
if nmbr==nmbr2 and nmbr==nmbr3:
    print("All same")
elif nmbr==nmbr2 or nmbr==nmbr3:
    print("Two same")   
else:
    print("All different")     



# digit=int(input("enter two digit number"))
# digit1=digit%10
# digit2=digit//10
# if (digit%7==0):
#     print("Lucky number")
# else:
#    print("Try again")
    