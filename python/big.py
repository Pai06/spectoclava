import networkx as nx
import numpy as np

import random

def calc_prob(bowler, batsman, simulations=1000):
    # Perform the calc_prob probability here
    # Replace this function with your own probability logic
    avg = (bowler['avg'] + batsman['avg']) / 2
    sr = (bowler['sr'] + batsman['sr']) / 2

    r = sr / 100
    q = r / avg
    p = 1 - q

    result = []# w 0 1 2 3 4 6, 0.03, 0.377, 0.43, 0.11, 0.003, 0.03, 0.02
    # runs = r * np.array([simulate_matchup(p) for _ in range(simulations)])
    # print(runs)
    # for w
    outcome = 0.03
    result.append(outcome)
    
    # analyse for 0
    outcome = 0.377
    result.append(outcome)
    
    # analyse for 1
    outcome = 0.43
    result.append(outcome)
    
    # analyse for 2
    outcome = 0.11
    result.append(outcome)
    
    # analyse for 3
    outcome = 0.003
    result.append(outcome)
    
    # analyse for 4
    outcome = 0.03
    result.append(outcome)
    
    # analyse for 6
    outcome = 0.02
    result.append(outcome)
    
    return result


def simulate_matchup(p, balls=60, wickets=1):
    result = np.random.binomial(1, p, balls)
    fall_of_wicket = np.where(result == 0)[0]
    nheads = 0

    if len(fall_of_wicket) < wickets:
        nheads = np.sum(result)
    else:
        last_wicket_index = fall_of_wicket[wickets-1]
        nheads = np.sum(result[:last_wicket_index])

    return nheads


def main():
    # Create an empty graph
    G = nx.Graph()

    # Define the set of bowlers
    bowlers = [
        {'name': 'Bowler 1', 'avg': 25, 'sr': 100},
        {'name': 'Bowler 2', 'avg': 30, 'sr': 95},
        {'name': 'Bowler 3', 'avg': 20, 'sr': 110},
        # {'name': 'Bowler 4', 'avg': 25, 'sr': 100},
        # {'name': 'Bowler 5', 'avg': 30, 'sr': 95},
        # {'name': 'Bowler 6', 'avg': 25, 'sr': 100}
    ]

    # Define the set of batsmen
    batsmen = [
        {'name': 'Batsman 1', 'avg': 40, 'sr': 120, 'runs':0, 'balls':0, 'dismissed':0, 'role':0},
        {'name': 'Batsman 2', 'avg': 35, 'sr': 125},
        {'name': 'Batsman 3', 'avg': 45, 'sr': 115},
        # {'name': 'Batsman 4', 'avg': 40, 'sr': 120},
        # {'name': 'Batsman 5', 'avg': 35, 'sr': 125},
        # {'name': 'Batsman 6', 'avg': 40, 'sr': 120},
        # {'name': 'Batsman 7', 'avg': 35, 'sr': 125},
        # {'name': 'Batsman 8', 'avg': 40, 'sr': 120},
        # {'name': 'Batsman 9', 'avg': 35, 'sr': 125},
        # {'name': 'Batsman 10', 'avg': 40, 'sr': 120},
        # {'name': 'Batsman 11', 'avg': 35, 'sr': 125}
    ]

    # Add nodes to the graph
    G.add_nodes_from([bowler['name'] for bowler in bowlers], bipartite=0)
    G.add_nodes_from([batsman['name'] for batsman in batsmen], bipartite=1)

    # Generate edges and calculate calc_prob probability
    matchup_analysis = {}
    for bowler in bowlers:
        for batsman in batsmen:
            G.add_edge(bowler['name'], batsman['name'])
            probability = calc_prob(bowler, batsman)
            matchup_analysis[(bowler['name'], batsman['name'])] = probability

    # Check if the graph is bipartite
    if nx.is_bipartite(G):
        print("Graph is bipartite.")
    else:
        print("Graph is not bipartite.")

    # Print the calc_prob probability
    for edge, probability in matchup_analysis.items():
        print(f"{edge}: {probability}")

    print(G)

if __name__ == '__main__':
    main()