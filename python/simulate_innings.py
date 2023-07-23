import random
import math

ind = ['Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'Suryakumar Yadav', 'Hardik Pandya', 'Ishan Kishan', 'Ravindra Jadeja', 'Kuldeep Yadav', 
       'Mohammed Shami', 'Yuzvendra Chahal', 'Mohammed Siraj']
aus = ['David Warner', 'Alex Carey', 'Steven Smith', 'Glenn Maxwell', 'Travis Head', 'Marcus Stoinis', 'Cameron Green', 
       'Pat Cummins', 'Josh Hazlewood', 'Ashton Agar', 'Adam Zampa']

global batters
bat_squad = ind
bowl_squad = aus[5::]
wickets = 0
runs = 0
outcomes=['w', 0, 1, 2, 3, 4, 6]
timeline=[]
selected_bowlers = []
def probability(batter, bowler):
    x=[0.03, 0.377, 0.43, 0.11, 0.003, 0.03, 0.02]  # Set the values of φ1,...,φ7 (you can change them)
    return x

def sim_match(batters, bowlers):
    overs_bowled = 0
    last_bowler = None
    strike = 0
    batter = [batters[0], batters[1]]
    # print(batter)
    global wickets, runs, timeline, selected_bowlers
    while overs_bowled < 50 and wickets<10:
        available_bowlers = [bowler for bowler in bowlers if bowler['overs'] < 10 and bowler != last_bowler]
        if not available_bowlers:
            break
        bowler = random.choice(available_bowlers)
        if overs_bowled < 50 and wickets<10:
            if bowler not in selected_bowlers:
              selected_bowlers.append(bowler)
            
            last_bowler = bowler
            scover=[]
            for b in range(1, 7):
                if wickets == 10:
                    break
                else:
                    
                    phi = probability(batter[strike], bowler)#[0.04, 0.378, 0.3, 0.07, 0.002, 0.11, 0.1]  # Set the values of φ1,...,φ7 (you can change them)
                    # print(phi)
                    outcome = random.choices(outcomes, weights=phi)[0]
                    
                    # runs += 0 * int(outcome == 'w') + 0 * int(outcome == 0) + 1 * int(outcome == 1) + 2 * int(outcome == 2) + 3 * int(outcome == 3) + 4 * int(outcome == 4) + 6 * int(outcome == 6)
                    # wickets += 1 * (int(outcome == 'w'))
                    scover.append(outcome)
                    batter[strike]['balls'] += 1
                    batter[strike]['out'] = 'Not Out'
                    if outcome==0:
                        runs += 0
                        batter[strike]['runs'] += outcome
                        bowler['dots'] += 1
                        # print('0')
                    elif outcome==1:
                        runs += 1
                        batter[strike]['runs'] += outcome
                        strike = (strike+1)%2
                        bowler['runs'] += 1
                        # print('1')
                    elif outcome==2:
                        runs += 2
                        batter[strike]['runs'] += outcome
                        bowler['runs'] += 2
                        # print('2')
                    elif outcome==3:
                        runs += 3
                        batter[strike]['runs'] += outcome
                        strike = (strike+1)%2
                        bowler['runs'] += 3
                        # print('3')
                    elif outcome==4:
                        runs += 4
                        batter[strike]['runs'] += outcome
                        batter[strike]['4s'] += 1
                        bowler['runs'] += 4
                        # print('4')
                    elif outcome==6:
                        runs += 6
                        batter[strike]['runs'] += outcome
                        batter[strike]['6s'] += 1
                        bowler['runs'] += 6
                        # print('6')
                    elif outcome=='w':    
                        wickets += 1
                        bowler['wickets'] += 1
                        batter[strike]['out'] = 'Out : '+str(overs_bowled)+'.'+str(b)
                        # print('w')
                        if wickets<10:
                            batter[strike]=batters[wickets+1]
                        elif wickets==10 and b!=6:
                            bowler['overs'] += b/10 -1
                            break
                        else:
                            break
            strike = (strike+1)%2
            overs_bowled += 1
            bowler['overs'] += 1
            timeline.append(scover)        
        else:
            break

    # return selected_bowlers
wickets = 0
bowlers = []
for name in bowl_squad:
    bowlers.append({'name':name, 'overs': 0, 'runs':0, 'wickets':0, 'dots':0})


batters = []
for name in bat_squad:
    batters.append({'name': name, 'runs': 0, 'balls':0, '4s':0, '6s':0, 'out':'DNB'})


# selected_bowlers = 
sim_match(batters, bowlers)
total_overs_bowled = sum(bowler['overs'] for bowler in selected_bowlers)
wickets = sum(bowler['wickets'] for bowler in selected_bowlers)

for bowler in selected_bowlers:
    print(f"{bowler['name']} \t\t {bowler['overs']} overs \t {bowler['runs']} runs \t {bowler['wickets']} wickets \t {bowler['dots']} dots \t {round(bowler['runs']/((bowler['overs']-math.floor(bowler['overs']))*10/6+math.floor(bowler['overs'])),2)} econ")
print('\n\n')
for batter in batters:
    print(f"{batter['name']} \t\t {batter['runs']} runs \t {batter['balls']} balls \t {batter['4s']} 4s \t {batter['6s']} 6s \t {batter['out']}")

# print(batters)
print('\n\n', timeline,'\n')
print("Total Runs:", runs)
print("Total Wickets:", wickets)
print(f"Total overs bowled: {total_overs_bowled}/50")

row_count = len(timeline)

print("Number of rows:", row_count)
# print("Balls", b)