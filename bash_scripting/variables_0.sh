#!/bin/bash
age=$1
echo "enter ur name"
read name
sleep 2
echo "hellow $age year old $name 😀"
file=$(ls)
place=$(pwd)
echo "hmmm u r here -> $place 📂 present files -> $file "
echo "the date is $(date)" #using direct date here 