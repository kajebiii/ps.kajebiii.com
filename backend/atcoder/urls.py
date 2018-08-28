from rest_framework.urlpatterns import format_suffix_patterns
from atcoder import views
from django.urls import path

urlpatterns = [
    path('problem-list/<slug:user_id>/', views.get_problem_list),
    path('base-information/', views.get_base_information),
]

urlpatterns = format_suffix_patterns(urlpatterns)
