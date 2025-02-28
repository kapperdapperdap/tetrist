# Tetrist - A Chrome Extension

## Description: A simple version of tetris designed to be played as a Chrome Extension.

## Features
- Standard tetris gameplay.
- Playable as a Chrome Extension
- Score and high score tracking

## Installation
### As Chrome Extension:
- Open Chrome web browser and go to chrome://extensions/
- Enable Developer mode (can be toggled in the top right)
- Click Load unpacked and select the project folder.
- The extension should now function as any other extension

### Alternatively:
- Open HTML-file directly

## How to play:
### Player Input:
- Left: LeftArrow, A
- Right: RightArrow, D
- Rotate: Uparrow, W
- Soft Drop: Downarrow, S
- Hard Drop: Space
- Restart game (clears map and score): R

### Gameplay:
- Move the falling piece and place it.
- Filled rows will be cleared, awarding points based on the number of lines cleared in a single drop: 1 line = 100, 2 lines = 300, 3 lines = 500, 4 lines = 800.
- The game "ends" when pieces reach the top and the player can no longer move the piece.

## Made with:
- HTML
- CSS
- JavaScript

## Future improvements:
- Fix rotations not behaving as original tetris game.
- Add colors (potentially pixel art) for each piece.
- Add a "NEXT-box", showing the next piece
- Add a "HOLD-box", letting the player save pieces for later.
- Add a opening menu displaying a leaderboard of highscores.


