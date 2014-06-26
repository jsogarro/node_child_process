from pandas import DataFrame

import matplotlib.pyplot as plt
import pandas as pd
import sys
import json

# create intial set of baby name
names = ['Bob','Jessica','Mary','John','Mel']
births = [456, 323,434, 333, 873]

BabyDataSet = zip(names,births)

df = DataFrame(data = BabyDataSet, columns=['names', 'births'])

df = df.to_json()

# Print JSON to be captured by Node Script
print df