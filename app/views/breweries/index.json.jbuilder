# json.array!(@breweries) do |brewery|
#   json.extract! brewery, :id, :name, :year, :active
# end

json.array!(@breweries) do |brewery|
  json.extract! brewery, :id, :name, :year, :active
  json.url brewery_url(brewery, format: :json)
end