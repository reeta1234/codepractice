class Person:
    def __init__(self, name):
        self._name = name



p = Person('Adam')
p.__name2 = 'udhay222'
print('The name is:', p._name)

