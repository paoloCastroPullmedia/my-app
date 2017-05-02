/**
 * Created by paolocastro on 02/05/2017.
 */
fetch('http://localhost:8000/api/sexes', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJQYW9sbyBDYXN0cm8iLCJleHAiOjE0OTM3MjU5NjgsImlhdCI6MTQ5MzcyMjM2OH0.IYClKYhlMbntFSZ5GINHr5qZweM9upXqKvodTOaiI3lddKS2KgFZHtXcA4ulP_BLCFS7cFC8Xl3BUv24_bAOZ7Zu_j8zja6qnorVAbxQK-oKo7v1PYDV6UM9VFuHYvj6McTnhxp4TJJCg7AdQX0umIBNQgjpeasl69AKmytj16_UsHsNmeyZ15652n2XAeqBoBJXQPl0yYf7ISnV7tYHAXP6WpFVkF6_RlrYCtzr4URezdS9Fqk8bp-vc8UB7lNLiAEld4UzJvbsSDlrDEz_WfiaeR5zBg0K2T_aGyRKjJoZj5oAnoD8sw5SpnfetNFgBkWCzuP2-oTc8CFncuJhY8rIiOMy32GzDt_onEx3xpUO9HYOj0yaq84tVUNWEAESSn6YpgHqKD0Bz0qD5uVAKh5kTTm0cF7oZAGUJGCbpJwGYP8_AvKt_l-UUIohyQsB4y5ZA2mQgT6ejsrlJD2enD0KGkTUfVTyKqRFTDlXxuWEDM65UNuefIDOcQtgvkiQ4GZds3pSjhl-hl6dKqcWJcyyTaiGX1oUpZzZK7NPWX9HS5AJUPGxCTSaeHiIIA7upQF4-AU5lTRyDjaIHEpDvHz1TnUIyS2cp8-o4VpfNM2mL4VGC0q0Z6h5J_BEIPgRuONBnmxocNJWugdE9WjTxl6JOW_vEh6Cjp1uAxy9C2Q'
    }
}).then(function(json){
    console.log('parsed json', json.json())

    let myData = json.json();

    this.setState({
        data: myData
    })
});
this.setState({isLoggedIn: true});