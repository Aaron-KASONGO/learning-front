$(document).ready(function(){
    $('p').filter(':not(.link)').css({fontFamily: 'verdana', color: 'green'})
    //p:first-of-type => va selectionner le premièr élément paragraphe de chaque article
    //p:first-child => selectionne le paragraphe uniquement s'il est premier enfant d'une autre balise
    //p:last-child => selectionne le paragraphe uniquement s'il est le dernier enfant d'une autre balise
    //p: nth-of-type(numero_de_paragraphe) => Pour préciser le paragraphe que l'on veut selectionner

    //Selecteur utilisable qu'en jQuery
    /*p:gt(numero_paragraphe) => qui selectionne uniquement les paragraphes plus grand que le numero spécifié
      p:lt(numero_paragraphe) => qui selectionne uniquement les paragraphes inférieurs au numero spécifié
      article:has(p.link) => qui selectionne la balise article ayant un paragraphe avec une class link
      :header => selectionne tous les titres de la page
    */

    //method .filter()
    /**$('p').filter(':not(.link)') => selectionne les paragraphes n'ayant pas de class link
     */
})
