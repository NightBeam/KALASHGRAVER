from django.contrib import admin
from .models import *

class ItemOfEquipmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
    list_display_links = ('name', 'id')
    search_fields = ('name', 'id')

class ElementForEquipmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
    list_display_links = ('name', 'id')
    search_fields = ('name', 'id')

admin.site.register(ItemOfEquipment, ItemOfEquipmentAdmin)
admin.site.register(ElementForEquipment, ElementForEquipmentAdmin)