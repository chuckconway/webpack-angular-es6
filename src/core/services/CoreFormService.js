import angular from 'angular';

angular.module('grover.core')
    .service('CoreFormService', formService);
             
             
function formService(){
        return {
                submitForm: function(form, valid, invalid, customCondition){
                    
                    var customEvaluation = (customCondition === undefined ? true : customCondition());

                    if(form.$valid && customEvaluation){
                        valid();
                    } else {
                        form.submitted = true;

                        if(invalid !== undefined){
                            invalid();
                        }
                    }
                }
        }
    }
