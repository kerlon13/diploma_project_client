import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

function CategoryCard ({title, image}) {
    const url = `http://localhost:3333${image}`

    return (
        <Card sx={{ maxWidth: "23%" }}>
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
    )

};

export default CategoryCard;