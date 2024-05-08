package fr.paul.corp.rest;

import com.mashape.unirest.http.JsonNode;
import fr.paul.corp.domain.service.Service;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@Transactional
public class Endpoint {
    private Service service;

    @Path("test")
    @GET
    public Response test()
    {
        System.out.println("Test succeeded corp !");
        return Response.accepted().build();
    }

    @Path("query/{string}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response search_query(@PathParam("string") String querry)
    {
        init();
        JsonNode res = this.service.call_search(querry);
        if (res != null)
        {
            return Response.ok(res.toString()).build();
        }
        return Response.serverError().build();
    }

    @Path("page")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response search_query()
    {
        init();
        JsonNode res = this.service.getPage();
        if (res != null)
        {
            return Response.ok(res.toString()).build();
        }
        return Response.serverError().build();
    }

    @Path("infos/{type}/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response search_query(@PathParam("type") String t, @PathParam("id") String id)
    {
        init();
        JsonNode res = this.service.getMovie(t, id);
        if (res != null)
        {
            return Response.ok(res.toString()).build();
        }
        return Response.serverError().build();
    }

    public void init()
    {
        if (this.service == null)
        {
            this.service = new Service();
        }
    }

}
