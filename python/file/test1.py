# f = open('demo1.txt','r')
# print(f.readline())
# print(f.readline())

# f = open("demo2.txt",'a')
# f.write("Hello I am working on file in python")
# f.close()

# f = open("demo2.txt",'r')
# print(f.read())
# d = open("demo1.txt",'r')
# f = open("demo3.txt",'a')
# f.write("sgfsdgdjghdfgl\n")
# f.write(d.read())
# f.close()

# f = open("demo3.txt",'r')
# print(f.read())
import pickle
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)
with open("pickle.txt","wb") as f1:
    p1 = Person("John", 36)
    pickle.dump(p1,f1)
    print('its done')
print(f1.closed)

with open("pickle.txt","rb") as f2:
    cls_obj = pickle.load(f2)
    print("Unpikle is done:")
    print(cls_obj.name)
   