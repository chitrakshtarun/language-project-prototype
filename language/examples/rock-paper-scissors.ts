export const rockPaperScissors = {
  id: "rock-paper-scissors",
  name: "Rock Paper Scissors (Best of Five)",
  code: `print "=== Rock Paper Scissors - Best of Five ==="
print "First to win 3 rounds wins the game!"
print ""

playerScore is equal to 0
computerScore is equal to 0
round is equal to 1

while playerScore is less than 3 and computerScore is less than 3 do
  print "--- Round " + round + " ---"
  print "Player Score: " + playerScore + " | Computer Score: " + computerScore
  print ""
  
  initialise playerChoice with user input "Enter your choice (rock, paper, or scissors):"
  
  randomChoice is equal to random number from 1 to 3
  computerChoice is equal to "rock"
  
  if randomChoice is equal to 1 then
    computerChoice is equal to "rock"
  endif
  if randomChoice is equal to 2 then
    computerChoice is equal to "paper"
  endif
  if randomChoice is equal to 3 then
    computerChoice is equal to "scissors"
  endif
  
  print "You chose: " + playerChoice
  print "Computer chose: " + computerChoice
  print ""
  
  if playerChoice is equal to computerChoice then
    print "It's a tie! No points awarded."
  else
    if playerChoice is equal to "rock" then
      if computerChoice is equal to "scissors" then
        print "Rock beats scissors! You win this round!"
        increment playerScore by 1
      else
        print "Paper beats rock! Computer wins this round!"
        increment computerScore by 1
      endif
    endif
    
    if playerChoice is equal to "paper" then
      if computerChoice is equal to "rock" then
        print "Paper beats rock! You win this round!"
        increment playerScore by 1
      else
        print "Scissors beats paper! Computer wins this round!"
        increment computerScore by 1
      endif
    endif
    
    if playerChoice is equal to "scissors" then
      if computerChoice is equal to "paper" then
        print "Scissors beats paper! You win this round!"
        increment playerScore by 1
      else
        print "Rock beats scissors! Computer wins this round!"
        increment computerScore by 1
      endif
    endif
  endif
  
  print ""
  increment round by 1
endwhile

print "=== Game Over ==="
print "Final Score - Player: " + playerScore + " | Computer: " + computerScore
print ""

if playerScore is greater than computerScore then
  print "Congratulations! You won the game!"
else
  print "Computer wins! Better luck next time!"
endif`,
};

