from rest_framework import serializers

from api.models import Company,Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company  = Vacancy.objects.create(name=validated_data.get('name'), description=validated_data.get('description'),
                                         city=validated_data.get('city'), address=validated_data.get('address'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address',instance.address)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Vacancy
        fields = ('id', 'name','description','salary','company','company_id')

# class VacancySerializer(serializers.Serializer):
#         id = serializers.IntegerField(read_only=True)
#         name = serializers.CharField()
#
#         salary = serializers.FloatField()
#         description = serializers.CharField()
#         company = serializers.CharField()
#
#         def create(self, validated_data):
#             company = Company.objects.filter(name=validated_data.get('company'))
#             vacancy = Vacancy.objects.create(name=validated_data.get('name'),description=validated_data.get('description'),
#                                              salary=validated_data.get('salary'),company=company[0])
#             return vacancy
#
#         def update(self, instance, validated_data):
#             instance.name = validated_data.get('name', instance.name)
#             instance.description = validated_data.get('description', instance.description)
#             instance.salary = validated_data.get('salary', instance.salary)
#             company = Company.objects.filter(name=validated_data.get('company'))
#             instance.company = company[0]
#             instance.save()
#             return instance
class CompanyWithVacancySerializer(serializers.ModelSerializer):
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelatedField(many=True, read_only=True)
    vacancies = VacancySerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields =  ('id', 'name','description','city','address','vacancies')