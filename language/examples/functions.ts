export const functions = {
  id: "functions",
  name: "Functions",
  code: `let greet be a function
  print "Hello, World!"
end function

run greet

let add be a function accepting a and b
  return a plus b
end function

result is equal to run add with 5 and 10
print result

let multiply be a function accepting x and y
  product is equal to x times y
  return product
end function

product is equal to run multiply with 3 and 4
print product`,
};

export const functionWithConditionals = {
  id: "function-conditionals",
  name: "Function with Conditionals",
  code: `let checkAge be a function accepting age
  if age is greater than 17 then
    return "Adult"
  endif
  if age is less than 18 then
    return "Minor"
  endif
end function

status is equal to run checkAge with 20
print status`,
};


