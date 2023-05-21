class Merchandise{
    constructor(){
        this.heading = createElement("h1").class("MerchHead");
        this.jerseyIMG=createDiv().class("jersey col-xl-4");
        this.img1 = createImg("Images/jersey.jpg").class("imgj");
    }

    display(){

        this.heading.html("<center>Merchandise</center>");
        const headingX = (width*1.75 - this.heading.size().width) / 2; // Calculate the x-coordinate for center alignment
        this.heading.position(headingX, 100);
        this.jerseyIMG.position(0,200);
        this.jerseyIMG.child(this.img1)
        back=1
    }

}