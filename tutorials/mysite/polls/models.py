from django.db import models


class Question(models.Model):
    """
    The question model contains the question text
    and the metadata
    """
    question_text = models.CharField(max_length=200)    
    pub_date = models.DateTimeField('datepublished')

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
