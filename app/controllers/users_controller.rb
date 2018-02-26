class UsersController < ApplicationController
  def index
    @users = User.all

    render 'index.json.jbuilder'

  end

  def create
    user = User.new(
      name: params[:name],
      username: params[:username],
      email: params[:email],
      # bio: params[:bio],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
      )

    if user.save
      render json: {message: 'User created successfully'}, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :bad_request
    end
  end

  def show
    @user = User.find(current_user.id)
    
    render 'show.json.jbuilder'
  end

  def update
    @user = User.find(current_user.id)

    @user.name = params[:name] || @user.name
    @user.bio = params[:bio] || @user.bio

    @user.save

    render 'show.json.jbuilder'
  end
end



  # def update  
  #   @sympol = Sympol.find(params[:id])

  #   @sympol.name = params[:name] || @sympol.name
  #   @sympol.origin = params[:origin] || @sympol.origin
  #   @sympol.description = params[:description] || @sympol.description

  #   @sympol.save
  #   render 'show.json.jbuilder'
  # end

