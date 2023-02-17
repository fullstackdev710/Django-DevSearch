from django.shortcuts import render
from .models import Profile

# Create your views here.


def profiles(request):
    profiles = Profile.objects.all()
    context = {"profiles": profiles}
    return render(request, 'users/profiles.html', context)


def profile(request, pk):
    profileObj = Profile.objects.get(id=pk)
    topSkills = profileObj.skill_set.exclude(description__exact="")
    otherSkills = profileObj.skill_set.filter(description="")
    projects = profileObj.project_set.all()
    context = {'profile': profileObj,
               'topSkills': topSkills, 'otherSkills': otherSkills, 'projects': projects}
    return render(request, 'users/user-profile.html', context)
