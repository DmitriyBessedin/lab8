$(document).ready(function(){

	
	var questions = [		"What year was Crystal Palace founded?",		"What is the nickname of Crystal Palace?",		"What is the name of Crystal Palace's stadium?",		"What is the capacity of Crystal Palace's stadium?"	];
	var answers = [		"1905",		"Eagles",		"Selhurst Park",		"25,486"	];
	var choice_options = [		["1895", "1905", "1915", "1925"],
		["Lions", "Eagles", "Elephants", "Giraffes"],
		["Emirates Stadium", "Stamford Bridge", "Selhurst Park", "Old Trafford"],
		["15,486", "20,486", "25,486", "30,486"]
	];

	
	for (var i = 0; i < questions.length; i++) {
		var questionDiv = $("<div>").addClass("question");
		questionDiv.append($("<p>").text("Q" + (i+1) + ". " + questions[i]));
		var choicesDiv = $("<div>").addClass("choices");
		for (var j = 0; j < choice_options[i].length; j++) {
			var label = $("<label>");
			var radioBtn = $("<input>").attr({
				type: "radio",
				name: "q" + (i+1),
				value: choice_options[i][j]
			});
			label.append(radioBtn);
			label.append(choice_options[i][j]);
			choicesDiv.append(label);
		}
		questionDiv.append(choicesDiv);
		$("#quiz-box").append(questionDiv);
	}

    
    var countCorrect = 0;
    var correct = ["1905", "Eagles", "Selhurst Park", "25,486"];
    var reset = false;
    
    $("button").click(function(event){
        countCorrect = 0;
        $("input[name^='q']").each(function() {
            if ($(this).is(':checked') && $.inArray($(this).val(), correct) !== -1) {
                countCorrect++;
            }
        });
        if (!reset) {
            reset = false;
            $("#quiz-box").append("<h1>Result of the quiz is: " + countCorrect + "</h1>");
        } 
        
    });
});
