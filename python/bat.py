import random

ind = ['Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'Suryakumar Yadav', 'Hardik Pandya', 'Ishan Kishan', 'Ravindra Jadeja', 'Kuldeep Yadav', 'Mohammed Shami', 'Yuzvendra Chahal', 'Mohammed Siraj']
aus = ['David Warner', 'Alex Carey', 'Steven Smith', 'Glenn Maxwell', 'Travis Head', 'Marcus Stoinis', 'Cameron Green', 'Pat Cummins', 'Josh Hazlewood', 'Ashton Agar', 'Adam Zampa']
# sims = {'six':p6, 'four':p4, 'three':p3, 'two':p2, 'one':p1, 'dot':p0, 'out':pw}
batters = aus
bowlers = ind

# def probability(batter, bowler):
#     return 1

# def bowl(batter, bowler):
#     probs=probability(batter, bowler)
#     return outcome

# ball=0
# over=0
# for batter in batters:
#     while over in range(0, 50):
#         strike=batters[i]
#         ball=(ball+1)
#         if ball==6:
#             over = over+1
#             ball = 0
#         outcome=bowl(batter, bowler)
#         print(over, '.', ball)
# import random

# wickets = 0
# R = 0

# for b in range(1, 301):
#     if wickets == 10:
#         Xb = 0
#     else:
#         u = random.uniform(0, 1)
#         v = 0.5  # Set the value of v (you can change it according to your requirement)
        
#         if u < v:
#             # Generate Y from a multinomial distribution
#             phi = [0.1, 0.15, 0.2, 0.25, 0.15, 0.1, 0.05]  # Set the values of φ1,...,φ7 (you can change them)
#             Y = random.choices(range(1, 8), weights=phi)[0]
#             R += 0 * int(Y == 'w') + 0 * int(Y == 0) + 1 * int(Y == 1) + 2 * int(Y == 2) + 3 * int(Y == 3) + 4 * int(Y == 4) + 6 * int(Y == 6)
#         else:
#             # Generate Xb based on previous X values
#             # Replace [X0,...,Xb-1] with the actual values
#             X_values = [3, 4, 1, 5, 6, 2]  # Example values, replace them with actual values
            
#             Xb = random.choice(X_values)
#             R += int(Xb == 3) + 2 * int(Xb == 4) + 3 * int(Xb == 5) + 4 * int(Xb == 6) + 6 * int(Xb == 7)
            
#             wickets += int(Xb == 1)

# print("Total Runs:", R)
# print("Total Wickets:", wickets)
# print("Balls", b)


wickets = 0
runs = 0
outcomes=['w', 0, 1, 2, 3, 4, 6]
for b in range(1, 61):
    if wickets == 10:
        break
    else:
        phi = [0.05, 0.368, 0.34, 0.07, 0.002, 0.1, 0.07]  # Set the values of φ1,...,φ7 (you can change them)
        outcome = random.choices(outcomes, weights=phi)[0]
        runs += 0 * int(outcome == 'w') + 0 * int(outcome == 0) + 1 * int(outcome == 1) + 2 * int(outcome == 2) + 3 * int(outcome == 3) + 4 * int(outcome == 4) + 6 * int(outcome == 6)
        wickets += 1 * (int(outcome == 'w'))

for b in range(61, 241):
    if wickets == 10:
        break
    else:
        phi = [0.03, 0.377, 0.43, 0.11, 0.003, 0.03, 0.02]  # Set the values of φ1,...,φ7 (you can change them)
        outcome = random.choices(outcomes, weights=phi)[0]
        runs += 0 * int(outcome == 'w') + 0 * int(outcome == 0) + 1 * int(outcome == 1) + 2 * int(outcome == 2) + 3 * int(outcome == 3) + 4 * int(outcome == 4) + 6 * int(outcome == 6)
        wickets += 1 * (int(outcome == 'w'))

for b in range(241, 301):
    if wickets == 10:
        break
    else:
        phi = [0.04, 0.378, 0.3, 0.07, 0.002, 0.11, 0.1]  # Set the values of φ1,...,φ7 (you can change them)
        outcome = random.choices(outcomes, weights=phi)[0]
        runs += 0 * int(outcome == 'w') + 0 * int(outcome == 0) + 1 * int(outcome == 1) + 2 * int(outcome == 2) + 3 * int(outcome == 3) + 4 * int(outcome == 4) + 6 * int(outcome == 6)
        wickets += 1 * (int(outcome == 'w'))

overs = b//6
b=b%6
# wickets = 0
# runs = 0
# outcomes=['w', 0, 1, 2, 3, 4, 6]

# def probability(batter, bowler):
#     x=[0.04, 0.378, 0.3, 0.07, 0.002, 0.11, 0.1]  # Set the values of φ1,...,φ7 (you can change them)
#     return x

# batter=['Rohit Sharma', 'Shubman Gill']
# strike = 0 #0 or 1
# for overs in range(0, 50):
#     bowler='Pat Cummins'
#     for b in range(1, 7):
#         if wickets == 10:
#             break
#         else:
#             phi = probability(batter[0], bowler)#[0.04, 0.378, 0.3, 0.07, 0.002, 0.11, 0.1]  # Set the values of φ1,...,φ7 (you can change them)
#             outcome = random.choices(outcomes, weights=phi)[0]
#             runs += 0 * int(outcome == 'w') + 0 * int(outcome == 0) + 1 * int(outcome == 1) + 2 * int(outcome == 2) + 3 * int(outcome == 3) + 4 * int(outcome == 4) + 6 * int(outcome == 6)
#             wickets += 1 * (int(outcome == 'w'))

# if b==6:
#     overs+=1
#     b=0


print("Total Runs:", runs)
print("Total Wickets:", wickets)
print("Overs", overs, '.',b)
# print("Balls", b)