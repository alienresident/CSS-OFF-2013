# CSS-OFF-2013

### Example files for CSS OFF 2013.

[CSS Off 2013](http://ums.sc/cssoff/) ran from to 11/12/13 11/26/13. I worked on creating a submission on my commute but with work and family commitments. I was unable to finish on time.

I thought it might be interesting to some to see the work I was able to do. It was the first time I used [Emmet](http://docs.emmet.io) to markup a design from a PSD and found that workflow very useful. 

## Process 
### Gleaning the PSD
I opened up the PSD and began making notes and copying the text from the document.

I created 2 files:  

```    
text-emmet.txt  // pasting the text and adding the markup
styles-emmet.txt // for taking notes of colors, fonts, sizes etc.
```   

For each layer set. I would copy and paste the text from Photoshop. I would then think about the markup that I would use to describe the text.

```
positioning relatives   
In 1858, English pictorial photographer Henry Peach Robinson created the world’s first photomontage by combining five different negatives to make one complete print of a young girl on her deathbed. “Fading Away”—Robinson’s first and most famous composite photo—depicts a young girl dying of consumption and was controversial when it was exhibited, with many believing it was not a suitable subject for photography.
```

This is the main content on the page and it makes sense that it should be within a HTML5 `<article>` tag.

In Emmet you can write it this way.   
 
```
article{positioning relatives In 1858, English pictorial photographer Henry Peach Robinson created the world’s first photomontage … }
```
which expands to:  

```
<article>
positioning relatives In 1858, English pictorial photographer Henry Peach Robinson created the world’s first photomontage …   
</article>
```

You can add then a `<h1>`  and `<p>` tags this way.

```    
article>h1{positioning relatives}>p{In 1858, English pictorial photographer Henry Peach Robinson created the world’s first photomontage … }
```
which expands to:

```
<article>
  <h1>positioning relatives
    <p>In 1858, English pictorial photographer Henry Peach Robinson created the world’s first photomontage … </p>
  </h1>
</article>
```

And so on. I finally came up with this snippet to generate the article;

```
article.feature>span{feature}+h1{positioning relatives}+figure>img[src="images/fading-away.jpg"][alt="Fading Away"][title="Fading Away by Henry Peach Robinson"]+figcaption>p{In }+del{1958}+ins{1858}+{, English pictorial photographer Henry Peach Robinson created the world’s first photomontage by combining five different negatives to make one complete print of a young girl on her deathbed. “}>a[href="http://www.nationalmediamuseum.org.uk/collection/photography/royalphotographicsociety/collectionitem.aspx?id=2003-5001/2/23282"]{Fading Away}+{”—Robinson’s first and most famous composite photo—depicts a young girl dying of consumption and was controversial when it was exhibited, with many believing it was not a suitable subject for photography.}^^^^
```
Which expands to: 

```html
<article class="feature">
  <span>feature</span>
  <h1>positioning relatives</h1>
  <figure>
    <img src="images/fading-away.jpg" alt="Fading Away" title="Fading Away by Henry Peach Robinson">
    <figcaption>
      <p>In </p>
      <del>1958</del>
      <ins>1858</ins>, English pictorial photographer Henry Peach Robinson created the world’s first photomontage by combining five different negatives to make one complete print of a young girl on her deathbed. “<a href="http://www.nationalmediamuseum.org.uk/collection/photography/royalphotographicsociety/collectionitem.aspx?id=2003-5001/2/23282">Fading Away</a>”—Robinson’s first and most famous composite photo—depicts a young girl dying of consumption and was controversial when it was exhibited, with many believing it was not a suitable subject for photography.
    </figcaption>
  </figure>
</article>
```

I also took style notes from the PSD using Emmet. I added the markup and used SASS style indentation to create the basic styles.

```
article.feature {
  // w 8g
  > span {
    font-family: "Merriweather Regular";
    fz13px
    lh79px
    lts.2em
    c#cbb8a0
    tt
  }
  h1{
    font-family: "Oswald Regular";
    fs75px
    lh79px
    c#fdcd84
    tt
  }
  p {
    font-family: "Merriweather Light";
    fz25px
    lh29px
    lts-.02em
  
  }
}

```
Here's the expanded version:

```scss
article.feature {
  // w 8g
  > span {
    font-family: "Merriweather Regular";
    font-size: 13px;
    line-height: 79px;
    letter-spacing: .2em;
    color: #cbb8a0;
    tt
  }
  h1{
    font-family: "Oswald Regular";
    font-style: 75px;
    line-height: 79px;
    color: #fdcd84;
    text-transform: uppercase;
  }
  p {
    font-family: "Merriweather Light";
    font-size: 25px;
    line-height: 29px;
    letter-spacing: -.02em;
  }
}
```
