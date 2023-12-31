import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

export function FavoriteItem({
  id,
  image,
  title,
  price,
  quantity,
  buttonText,
  onClick,
}) {
  return (
    <Container>
      <Link to={`/details/${id}`}>
        <img
          className="product-image"
          src={`${api.defaults.baseURL}/files/${image}`}
          alt={`Foto do ${title}`}
        />
      </Link>

      <div>
        <div className="dish-info">
          <Link to={`/details/${id}`}>
            <h3>
              {quantity && <span className="quantity">{quantity} x</span>}

              <span className="title">{title}</span>
            </h3>
          </Link>

          {price && (
            <span className="price">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price * quantity)}
            </span>
          )}
        </div>

        <button onClick={onClick}>{buttonText}</button>
      </div>
    </Container>
  );
}
