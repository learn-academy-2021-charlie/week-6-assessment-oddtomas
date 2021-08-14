# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# The BlogPost is the controller where the methods will be defined that control what is seen in the view. Def index is the rails convention for listing all the items in a particular model. Index represents R; a read action in CRUD.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #@post is an instance variable that is assigned the value of BlogPost.all/ which is the same as saying all of the items in the BlogPost model.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # Show is the rails convention for showing one particular item in a model. BlogPost.find(params[:id]) is saying @show is equal to one post defined by it's id. Each post in the BlogPost model will have it's own id upong creation such as 1,2,3 etc. An example route would be something like /posts/1  and this show method would show that particular item at that specific id. Show is also a R action in CRUD.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # New is used to display forms to the user but there isn't actual functionality to add the form information to the database quite yet with just the new method. New is a mix between C/create and R/read in CRUD.
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # The create method allows the user to actually submit to the database. BlogPost.create takes a parameter of the blog_post_params method that tightens up what can be submitted. The conditionals from line 34 to 38 check for validity, which is determined by the strong params and the validations the developer includes. If the post is valid then redirect to the newly created post and if not redirect to the same new post form to retry submission with valid inputs.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # The edit method renders an edit form to alter an existing item defined by the id number since it needs to know what it's editing. Similarly to the new method, edit just makes the edit form. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #The update method modifies the actual db information from the edit form. Update takes a param of the strong param method blog_post_params. It then checks for validity based on the strong params and any validations put in place. If the update is valid then redirect to the updated post, if not redirect back to the edit form to try again. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # Else if the delete is not valid redirect to the post you were trying to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #private is a keyword that restricts the scope of where a method can be called. Strong params are only meant to be arguments for other controller methods so it's fine to list them as private to avoid accidently being called elswhere. Everything below private is protected so it should be at the very bottom. 
  private
  def blog_post_params
    # ---10)
    # The blog_post object  can only accept these parameters, title and content to be saved to the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
