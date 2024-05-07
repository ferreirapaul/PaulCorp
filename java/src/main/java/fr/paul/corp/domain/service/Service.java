package fr.paul.corp.domain.service;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class Service {
    public JsonNode call_search(String q) {
        if (!q.matches("[a-zA-Z 0-9.]*")) {
            return null;
        }
        try {
            q = q.replaceAll(" ", "%20");
            HttpResponse<JsonNode> json = Unirest.post("https://www.movieofthenight.com/api/search?query=" + q)
                    .asJson();

            return json.getBody();
        } catch (UnirestException e) {
            System.err.println("Error in the request: " + e);
            return null;
        }
    }

    public JsonNode getPage()
    {
        try {
            HttpResponse<JsonNode> json = Unirest.post("https://www.movieofthenight.com/api/catalog?userLanguage=en&services=netflix&country=us&order_by=imdb_rating&desc=false&page=1&type=movie")
                    .body("{}")
                    .asJson();
            return json.getBody();
        } catch (UnirestException e) {
            System.err.println("Error in the request: " + e);
            return null;
        }
    }

    public JsonNode getMovie(String type, String id) {
        if (!type.matches("[a-zA-Z 0-9.]*") && !id.matches("[a-zA-Z 0-9.]*") ) {
            return null;
        }
        try {
            HttpResponse<JsonNode> json = Unirest.post("https://www.movieofthenight.com/api/" + type + "/" + id + "/en")
                    .body("{}")
                    .asJson();
            return json.getBody();
        } catch (UnirestException e) {
            System.err.println("Error in the request: " + e);
            return null;
        }
    }
}
