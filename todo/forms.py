from django.forms import ModelForm
from .models import Todo,Profile

class TodoForm(ModelForm):
    class Meta:
        model = Todo
        fields = ['title', 'memo', 'important']
