from django.shortcuts import render, HttpResponse

def Grav(request):
    return render(request, 'ENGRAVING/engraving.html')
