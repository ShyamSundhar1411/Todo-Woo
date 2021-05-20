from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

class Todo(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    datecompleted = models.DateTimeField(null=True, blank=True)
    important = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatar/',default = 'avatar/default.png',blank = True)
    email = models.EmailField(blank=True)
    bio = models.TextField(blank=True,max_length = 500)
    def __str__(self):
        return self.user.username
@receiver(post_save, sender = User)
def update_profile_signal(sender,instance,created,**kwargs):
    if created:
        Profile.objects.create(user = instance)
    instance.profile.save()
