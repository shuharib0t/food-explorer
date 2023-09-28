import { useFavorites } from "../../hooks/favorites";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { ProductItem } from "../../components/ProductItem";

import EmptyFavoritesImage from "../../assets/no-favorites.svg";

import { Container, EmptyFavorites, FavoritesList } from "./styles";

export function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  async function handleRemoveFavorite(id) {
    await removeFavorite(id);
  }

  return (
    <Container>
      <Header />

      <main>
        <BackButton />
        {favorites.length === 0 ? (
          <EmptyFavorites>
            <img src={EmptyFavoritesImage} alt="Não há favoritos" />
            <h2>
              Você ainda não tem <span>favoritos</span>.
            </h2>
          </EmptyFavorites>
        ) : (
          <>
            <h1>Meus favoritos</h1>
            <FavoritesList>
              {favorites.map((favorite) => (
                <ProductItem
                  id={favorite.id}
                  key={favorite.id}
                  title={favorite.name}
                  image={favorite.image}
                  buttonText="Remover dos Favoritos"
                  onClick={() => handleRemoveFavorite(favorite.id)}
                />
              ))}
            </FavoritesList>
          </>
        )}
      </main>

      <Footer />
    </Container>
  );
}