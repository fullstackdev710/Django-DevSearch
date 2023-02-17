from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from django.contrib.auth.models import User
from .models import Profile


def createProfile(sender, instance, created, **kwargs):
    print("Profile signal triggered")
    if created:
        user = instance
        profile = Profile.objects.create(
            user=user,
            username=user.username,
            email=user.email,
        )


def deleteUser(sender, instance, **kwargs):
    print('Deleting User...')


post_save.connect(createProfile, sender=Profile)
post_delete.connect(deleteUser, sender=Profile)
