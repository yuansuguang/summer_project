from django.urls import path
from . import views

urlpatterns = [
    path('api/list', views.survey_list, name='survey_list'),
    path('api/share', views.survey_share, name='survey_share'),
    path('api/link', views.survey_link, name='survey_link'),
    path('api/get_detail', views.get_survey_detail, name='get_survey_detail'),
    path('api/get_detail_code', views.get_survey_detail, name='get_survey_detail')
]