import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { BASE_URL } from "../../utils";
import { Link } from "react-router-dom";

function CategoryCard ({id, title, image}) {
    const url = `${BASE_URL}${image}`

    return (
        <Link to={`/${id}`} style={{ maxWidth: "23%", marginBottom: "50px", textDecoration: "none" }}>
            <Card sx={{height: "100%"}} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={url}
                        alt={title}
                        sx={{height: "35vh", objectFit: "cover"}}
                    />
                    <CardContent style={{fontSize:"1.5rem", fontWeight: "bold"}}>
                        {title}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default CategoryCard;