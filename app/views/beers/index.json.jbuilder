#
# json.array!(@beers) do |beer|
#   json.extract! beer, :id, :name, :style, :brewery
# end

json.array!(@beers) do |beer|
  json.extract! beer, :id, :name, :style_id, :brewery_id, :created_at, :updated_at
  json.url beer_url(beer, format: :json)
end