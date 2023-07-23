# import random

# bowlers = ['Bowler 6', 'Bowler 7', 'Bowler 8', 'Bowler 9', 'Bowler 10', 'Bowler 11']

# previous_bowler = ''
# repeated_count = 0
# bowler_counts = {b: 0 for b in bowlers}

# for _ in range(50):
#     if repeated_count >= 10:
#         # Select a bowler from the remaining options
#         available_bowlers = [b for b in bowlers if b != previous_bowler]
#         bowler = random.choice(available_bowlers)
#         repeated_count = 0
#     else:
#         available_bowlers = [b for b in bowlers if b != previous_bowler and b != previous_bowler + ' (consecutive)']
#         bowler = random.choice(available_bowlers)
#         if bowler == previous_bowler:
#             repeated_count += 1
#         else:
#             repeated_count = 0

#     print('Selected Bowler:', bowler)
#     bowler_counts[bowler] += 1
#     previous_bowler = bowler

# print('Bowler Counts:')
# for bowler, count in bowler_counts.items():
#     print(f'{bowler}: {count} times')

import random

def select_bowlers(bowlers):
    selected_bowlers = []
    overs_bowled = 0
    last_bowler = None

    while overs_bowled < 50:
        available_bowlers = [bowler for bowler in bowlers if bowler['overs'] < 10 and bowler != last_bowler]
        if not available_bowlers:
            break

        bowler = random.choice(available_bowlers)
        if overs_bowled <= 50:
            if bowler not in selected_bowlers:
              selected_bowlers.append(bowler)
            overs_bowled += 1
            bowler['overs'] += 1
            last_bowler = bowler
        else:
            break

    return selected_bowlers

bowlers = [
    {'name': 'Bowler6', 'overs': 0},
    {'name': 'Bowler7', 'overs': 0},
    {'name': 'Bowler8', 'overs': 0},
    {'name': 'Bowler9', 'overs': 0},
    {'name': 'Bowler10', 'overs': 0},
    {'name': 'Bowler11', 'overs': 0},
]

selected_bowlers = select_bowlers(bowlers)
total_overs_bowled = sum(bowler['overs'] for bowler in selected_bowlers)

print(f"Selected Bowlers (Total overs bowled: {total_overs_bowled}/50):")
for bowler in selected_bowlers:
    print(f"{bowler['name']}: {bowler['overs']} overs")