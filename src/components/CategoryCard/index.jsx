import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { BASE_URL } from "../../utils";
import { Link } from "react-router-dom";

function CategoryCard ({id, title, image}) {
    const url = `${BASE_URL}${image}`

    return (
        <Link to={`/${id}`} style={{ maxWidth: "23%", marginBottom: "50px", textDecoration: "none" }}>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={url}
                        alt={title}
                        sx={{height: 350, objectFit: "cover"}}
                    />
                    <CardContent>
                        {title}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default CategoryCard;