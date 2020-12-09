from .models import Loja, Categoria, Produto, Promocao
from rest_framework import serializers

class LojaSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Loja
        fields = ['id', 'nome', 'cidade', 'uf', 'email']

class CategoriaSerializer(serializers.ModelSerializer):   
    
    class Meta:
        model = Categoria
        fields = ['id', 'nome']

class ProdutoSerializer(serializers.ModelSerializer):   
    # permite trazer o campo do objeto e não o ID
    categoria = serializers.SlugRelatedField(many=False, read_only=False, queryset=Categoria.nome,slug_field='nome') 
    class Meta:
        model = Produto
        fields = ['id', 'nome', 'imagem', 'descricao', 'categoria']

class PromocaoSerializer(serializers.ModelSerializer):   
    produto = ProdutoSerializer(many=False, read_only=False) 
    loja = LojaSerializer(many=False, read_only=False) 
    class Meta:
        model = Promocao
        fields = ['id','produto', 'loja', 'preco', 'cupom', 'destaque']
