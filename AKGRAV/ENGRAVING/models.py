from django.db import models


class ElementForEquipment(models.Model):
    name =  models.CharField(max_length=50, default=None, blank=True)
    folderWithGLTFModel = models.FileField(blank=True, default=None)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Элемент Экипировки(содержание)'
        verbose_name_plural = 'Элементы Экипировки(содержание)'
        ordering = ['id']



class ItemOfEquipment(models.Model):
    name = models.CharField(max_length=25, default=None, blank=True)
    selectionЕlements = models.ForeignKey(ElementForEquipment, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Элемент Экипировки'
        verbose_name_plural = 'Элементы Экипировки'
        ordering = ['id']
