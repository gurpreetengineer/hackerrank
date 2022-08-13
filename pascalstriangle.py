# 1
# 1 1
# 1 2 1
# 1 3 3 1
# 1 4 6 4 1
# 1 5 10 10 5 1

from asyncore import loop
from turtle import back


def pascalsTriangle(user_input):
  # i, j
  backup_one = [1]
  loop_list = [1]
  temp = 0
  for i in range(1, user_input+1):
    for k in loop_list:
      if temp == 0:
        for l in range(user_input-i):
          print('  ', end='')
          temp = 1
      print('{:4}'.format(k), end='')
    temp = 0
    for j in range(len(loop_list)):
      if len(backup_one) > 1:
        addition = loop_list[j-1] + loop_list[j]
        backup_one.insert(j, addition)
        
      else:
        backup_one.append(1)
    
    loop_list = backup_one
    backup_one = [1]
    

    
    print()
  
  
if __name__ == '__main__':
  
  user_input = int(input('please enter length: '))
  pascalsTriangle(user_input)

