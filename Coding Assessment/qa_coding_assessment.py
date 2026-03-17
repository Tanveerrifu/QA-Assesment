
# QA Coding Assessment Programs

# 1. Check if a number is Even or Odd
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("The number is Even")
else:
    print("The number is Odd")


# 2. Check if a number is Prime or Not
num = int(input("\nEnter another number to check prime: "))

if num <= 1:
    print("Not a prime number")
else:
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

    if is_prime:
        print("Prime number")
    else:
        print("Not a prime number")


# 3. Find the Maximum Number from an Array
numbers = list(map(int, input("Enter numbers separated by space: ").split()))

max_number = numbers[0]

for num in numbers:
    if num > max_number:
        max_number = num

print("Maximum number is:", max_number)
