#include<stdio.h>
main(){float l,w,r;char s;printf("Enter Shape: ");scanf(" %c",&s);if(s=='r'){printf("Enter Length & Width: ");scanf("%f %f",&l,&w);printf("Area=%.2f\nPerimeter=%.2f",l*w,2*(l+w));}else if(s=='c'){printf("Enter Radius: ");scanf("%f",&r);printf("Area=%.2f\nCircumference=%.2f",3.14*r*r,2*3.14*r);}}
