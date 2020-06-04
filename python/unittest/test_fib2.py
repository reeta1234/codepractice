from fibonacci import fib,sum


def test_fib():
    assert fib(0) == 0
    assert fib(1) == 1
    assert fib(10) == 55
    print("***********************************")

def test_sum():
    assert sum(3,4)==7,"Successful"

def test_sum2():
    assert sum(2,2)==5,"Successful"

# if __name__ == "__main__":
#     test_sum()
#     print("Everything passed")