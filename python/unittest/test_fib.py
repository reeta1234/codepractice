from fibonacci import fib,sum


def test_fib():
    assert fib(0) == 0
    assert fib(1) == 1
    assert fib(10) == 55

def test_sum():
    assert sum(3,4)==7,"Successful"

# if __name__ == "__main__":
#     test_sum()
#     print("Everything passed")