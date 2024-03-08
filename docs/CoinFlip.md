# Coinflip
contract address : 0x94C9c65c9f828703A716642E316CcE302Cdd1661 

# thoughts 

1. fetch the balance for the user so they know how much to bet next 

2. how many wins or losses is confusing to the user, best to simply the logic so that the user just knows when they win or show "try again"
- ( withdrawl button changes color,glow effect on button, buton appears? )



# read 
- balances (address) returns users balance within SC
- PayToken : $AQUA : 0xe34a1fef365876d4d0b55d281618768583ba4867 
- maxBet 
- minBet 

# Logic for Frontend 

load number of wins : after each bet, check this value, if value increased , then show withdrawal button

totalBets - Wins = # of losses 
totalBets - Losses = # of winns

- getTotalBets(address) returns int ()
- totalBets(address) returns int ()
- totalLoss(address) returns int ()
- totalWins(address) returns int ()

if total = 1 and win = 1 (allow withdraw)
if total = 1 and loss = 1 (bet again)