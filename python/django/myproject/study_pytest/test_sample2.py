import pytest
def test_file1_method1():
	x=5
	y=6
	assert x+1 == y,"test failed"
	#assert x == y,"test failed"
def test_file1_method2():
	x=5
	y=6
	assert x+1 == y,"test failed" 
def test_hello_test():
    assert "hello" == "hello","is an assertion failure." 
    # assert 4==4, "is a successful assertion"
    # assert True, "is a successful assertion"
    # assert False ,"is an assertion failure."