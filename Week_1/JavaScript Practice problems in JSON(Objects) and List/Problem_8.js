var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,question,answer) {
   
    // your code here

    for(key in securityQuestions){
        if(securityQuestions[key].question==question){
            if(securityQuestions[key].expectedAnswer==answer){
                return true
            }
            else{
                return false
            }
        }
    }
    return false; 
   }