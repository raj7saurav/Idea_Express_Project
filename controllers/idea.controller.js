/**
 * This file will have the logic for the idea resource
 */
const ideas = require("../models/idea.model"); // This return all ideas

/**
 * Logic to get all ideas
 * Need to write a method,which take req , and res objects 
 * and create idea and return the response 
 */

exports.getIdeas = (req , res ) =>{
    /**
     * Logic to get all the idea
     * 
     */

    res.status(200).send(ideas);
}

/**
 * Method to get idea based on id 
 * 
 * 127.0.0.1:8080/ideaApp/api/v1/idea/1
 */

exports.getIdeaBasedOnId =( req , res ) =>{
    const ideaId = req.params.id;
    const idea =ideas[ideaId];
    res.status(200).send(idea);    
}

/**
 * Method to create a new idea
 */

exports.createIdea = ( req ,res ) =>{

/**
 * I need to first read JSON request body into JS Object
 */
req.body.id = ++count ; //we adding a id field to the request

ideas[count] = req.body;

res.status(201).send(ideas[count]);

}

// Method to update an existing idea

exports.updateIdea = (req , res ) =>{
    const ideaId = req.params.id;

    const idea = idea[ideaId];

    if(idea){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);

    }else{
res.status(400).send({
    message :"Idea id passed is not valid"
    })

    }


}